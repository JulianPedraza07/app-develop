function users(){
    document.getElementById('cardHeader').innerHTML = '<h5>Listado de Usuarios</h5>'
    const REQRES_ENDPOINT = 'https://reqres.in/api/unknown'
    fetch(REQRES_ENDPOINT, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    })
    .then((response) =>{
        return response.json().then(
            data => {
                return {
                    status: response.status,
                    info: data,
                };
            }
        );
    })
    .then((result) => {
        console.log('resultado ', result)
        if(result.status === 200){
            let listUsers = `
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Año</th>
                            <th scope="col">Color</th>
                            <th scope="col">Color</th>
                        </tr>
                    </thead>
                    <tbody>
            `
            result.info.data.forEach(element => {
                listUsers = listUsers + `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.year}</td>
                    <td>${element.pantone_value}</td>
                    <td><input type = 'color' value = '${element.color}'></input></td>
                </tr>
                `
            });
            listUsers = listUsers + `
                    </tbody>
                </table>
            ` 
            document.getElementById('info').innerHTML = listUsers;
        }
        else{
            document.getElementById('info').innerHTML = 'No existen usuarios en la Base de datos'
        }
    });
}

function products(){
    document.getElementById('cardHeader').innerHTML = '<h5>Listado de Mercado</h5>'
}

function logout(){
    localStorage.removeItem('token')
    location.href = '../index.html'
}