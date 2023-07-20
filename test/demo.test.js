
describe( 'Este es el titulo de prueba' ,()=>{

    test('Probando componente', ()=>{
        const message = 'hola mundo';
        const messsage2= message.trim();
    
        expect(message).toBe(messsage2)
    })
    
} )