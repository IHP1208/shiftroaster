import React ,{Component}from 'react'

class Add extends Component{
    render(){
        var i=1;
        var myStyle={
            fontSize:100,
            color:'#FF0000'
        }
        return(
            <div>
                <h1 style={myStyle}>Header</h1>
                <h1>{1+1}</h1>
                <h1>{i==1?'True!':'False'}</h1>                
            </div>

        )
        
    }
    
}
export default Add