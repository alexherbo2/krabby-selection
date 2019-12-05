krabby.selection = Selection.create({

  // Class for the selection-area
  class: 'selection',

  // All elements in this container can be selected
  selectables: ['a']

}).on('beforestart', ({ oe }) => {

  // Prefix key to start selection: Control or Command key (⌘).
  // Return false to cancel selection.
  if (! (oe.ctrlKey || oe.metaKey)) {
    return false
  }

}).on('move', ({ changed: { added, removed } }) => {

  // Update selections
  krabby.selections.add(...added)
  krabby.selections.remove(...removed)

})
