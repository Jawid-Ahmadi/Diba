
function Counter(p=[number,up,right,left,bottom]) {
  const style = {
    "top":`${p.up}px`,
    "bottom":`${p.bottom}px`,
    "right":`${p.right}px`,
    "left":`${p.left}px`
  }
  return (
    <span style={style} className="absolute block bg-pink-400 w-5 h-5 text-white text-center text-sm rounded-full cursor-default">{p.number}</span>
  )
}

export default Counter