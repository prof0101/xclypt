const fs = require('fs')
const path = require('path')

const lifecycleHooks = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
]

function moveLifecycleHooks(scriptContent) {
  const methodsIndex = scriptContent.indexOf('methods: {')
  if (methodsIndex === -1) return scriptContent // If no methods, return as is

  let lifecycleSection = ''
  let remainingScript = scriptContent
  let removedHooks = 0

  lifecycleHooks.forEach((hook) => {
    const hookRegex = new RegExp(
      `\\b${hook}\\b\\s*\\([^\\)]*\\)\\s*{[^}]*?}\\s*,?`,
      'g'
    )
    const matches = remainingScript.match(hookRegex)
    if (matches) {
      matches.forEach((match) => {
        const matchStartIndex = remainingScript.indexOf(match)
        if (matchStartIndex > methodsIndex) {
          if (match.trim().endsWith(',')) {
            lifecycleSection += match.trim() + '\n'
          } else {
            lifecycleSection += match.trim() + ',\n'
          }
          remainingScript = remainingScript.replace(match, '')
          removedHooks++
        }
      })
    }
  })

  if (lifecycleSection) {
    let beforeMethods = remainingScript.slice(0, methodsIndex).trim()
    let methodsSection = remainingScript
      .slice(methodsIndex, remainingScript.indexOf('}', methodsIndex) + 1)
      .trim()
    let afterMethods = remainingScript
      .slice(remainingScript.indexOf('}', methodsIndex) + 1)
      .trim()

    // Remove trailing comma if there are lifecycle hooks and it is safe to do so
    if (beforeMethods.endsWith(',')) {
      beforeMethods = beforeMethods.slice(0, -1).trim()
    }

    // Ensure lifecycle hooks end with a comma if there are any and not already comma-ended
    if (lifecycleSection.length > 0 && !lifecycleSection.trim().endsWith(',')) {
      lifecycleSection = lifecycleSection.trim() + ',\n'
    }

    // Fix double commas between lifecycle hooks and methods
    if (methodsSection.startsWith(',')) {
      methodsSection = methodsSection.slice(1).trim()
    }

    return `${beforeMethods}\n${lifecycleSection}${methodsSection}\n${afterMethods}`
  }

  return scriptContent // If no lifecycle hooks were moved, return as is
}

function processVueFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err)
      return
    }

    const scriptMatch = data.match(/<script[^>]*>([\s\S]*)<\/script>/)
    if (!scriptMatch) {
      console.log(`No <script> tag found in ${filePath}`)
      return
    }

    const scriptContent = scriptMatch[1]
    const newScriptContent = moveLifecycleHooks(scriptContent)

    const newData = data.replace(scriptContent, newScriptContent)

    fs.writeFile(filePath, newData, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}:`, err)
      } else {
        console.log(`Successfully processed ${filePath}`)
      }
    })
  })
}

function traverseDirectory(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${directory}:`, err)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file.name)

      if (file.isDirectory()) {
        traverseDirectory(filePath)
      } else if (file.isFile() && path.extname(file.name) === '.vue') {
        processVueFile(filePath)
      }
    })
  })
}

const currentDirectory = process.cwd()
traverseDirectory(currentDirectory)
