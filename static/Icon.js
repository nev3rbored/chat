/*
mixin icon(name, type, weight=400, fill=0, grade=0, opsize=48)
  span.material-symbols-outlined(style=) &attributes(attributes)= name
*/

function Icon({ children, fill=0, weight=400, grade=0, opsize=48, ...props }) {
  // alert('rendering icon')
  return <span class="material-symbols-outlined" style={{fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsize};`}} {...props}>{children}</span>
}

// alert('icon loaded')