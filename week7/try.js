try{
    foo() // this didn't fire i caught an error 
} catch(err){
    console.log('error something is broken please fix and try again!!')
}finally{
    console.log('i will always fire last!')
}