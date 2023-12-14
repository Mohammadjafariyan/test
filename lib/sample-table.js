const SampleTable = props => {
  const arr = [...Array(5).keys()]

  return (
    <div className='table-responsive'>

        <h6>{props.title}</h6>
      <table className='table ' style={{textAlign:'center'}}>
        <thead>
          <tr> 
            {props.cols &&
              props.cols.map((s,i) => {
                return <th   key={s.name} s style={{padding:'10px' }} >
                <span style={{backgroundColor:'green',borderRadius:'10px',display:'block'
                ,width:'100%',textAlign:'center',color:'white'}}>{s.name}</span>

              </th>
              })}
          </tr>
        </thead>
        <tbody>
          {arr.map((s,j) => {
            return (
                <tr key={j}  >
                  {props.cols &&
                    props.cols.map((s,i) => {
                      return <td key={i} style={{padding:'10px'}} >
                        <span style={{backgroundColor:'rgb(191 191 191 / 59%)',borderRadius:'10px',display:'flex'
                        ,height:'30px',width:'100%'}}></span>

                      </td>
                    })}
                </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


export default SampleTable;