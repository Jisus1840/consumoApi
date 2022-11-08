let tableInfo = $('#info').DataTable({
    languaje: {
        url: "https://cdn.datatables.net/plug-ins/1.11.4/i18n/es_es.json"
    },
    paging: false,
    searching: true,
    sort: false,
    responsive: true,
    columns: [
        { data: 'cve_plan' },
        { data: 'grado' },
        { data: 'clave' },
        { data: 'materia' },
        { data: 'horas_prac' },
        { data: 'horas_teo' },
        { data: 'creditos' },
        {
            data: null,
            render: (data) => {
                return `
            <div class="form-group text-center">
                <button id="" name="" onclick="editar()" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></i></button>
                <button id="${data.cve_plan}" name="${data.clave}" onclick="borrar(this)" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            </div>
            `

            }
        }
    ]
});

const limpiar = () => {
    $.ajax({
        url: 'https://scompcenter.com/david/rest_api_alu_materias_daw/api/lista_planes_materias.php',
        dataType: 'text',
        success: function (data) {
            const index = data.indexOf('{');
            data = data.substring(index);
            data = JSON.parse(data);

            tableInfo.clear();
            tableInfo.rows.add(data.body).draw();
        },

    })
}


const agregar = async () => {
    // Variables
    let cve_plan = document.getElementById("cve_plan").value;
    let grado = document.getElementById("grado").value;
    let clave = document.getElementById("clave").value;
    let materia = document.getElementById("materia").value;
    let horas_practica = document.getElementById("horas_practica").value;
    let horas_teo = document.getElementById("horas_teo").value;
    let creditos = document.getElementById("creditos").value;
    // URL
    let url = 'https://scompcenter.com/david/rest_api_alu_materias_daw/api/create_materia.php';

    // data
    let data = {
        "cve_plan": cve_plan,
        "grado": grado,
        "clave": clave,
        "materia": materia,
        "horas_practica": horas_practica,
        "horas_teo": horas_teo,
        "creditos": creditos
    }

    // Init
    const init = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        }
    }

    const req = await fetch(url, init)

    if (req.ok) {
        const res = await req.text();
        Swal.fire({
            title: "Datos agregados correctamente!",
            text: res,
            icon: "success"
        });
        // location.href = route("api");
        document.getElementById("agregarDatos").reset();
        // limpiar()
    } else {
        Swal.fire({
            title: "Error",
            text: res,
            icon: "error"
        });
    }
}

const borrar = async (event) => {
    Swal.fire({
        title: "¿Estas seguro de que deseas eliminar este elemento?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Aceptar`,
        denyButtonText: `Cancelar`,
    }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let url = "https://scompcenter.com/david/rest_api_alu_materias_daw/api/delete_materia.php";

            let data = {
                "cve_plan": event.id,
                "clave": event.name
            }

            const init = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }
            }

            const req = await fetch(url, init);
            limpiar();
        }
    });
}

const editar = () => {
    // Construcción del modal
    let modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.toggle();
    document.getElementById(
        "exampleModalLabel"
    ).innerHTML = `Editar Plan`;
    document.getElementById("exampleModalLabel").style = "color: white";
    document.getElementById("modal-body").innerHTML = `
         <style>
         .modal-header {
             background: grey;
             color: white;
         }
         .modal-content{
             box-shadow: 17px 8px 10px -6px rgba(36,36,36,0.85);
         }
         </style>
         <form action="" id="agregarDatos">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="" class="form-label">Plan</label>
                            <input type="text" id="cve_plan" name="cve_plan" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label for="" class="form-label">Grado</label>
                            <input type="text" id="grado" name="grado" class="form-control">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label for="" class="form-label">Clave</label>
                            <input type="text" id="clave" name="clave" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label for="" class="form-label">Materia</label>
                            <input type="text" id="materia" name="materia" class="form-control">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label for="" class="form-label">Horas Practicsa</label>
                            <input type="text" id="horas_practica" name="horas_practica" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label for="" class="form-label">Horas Teo</label>
                            <input type="text" id="horas_teo" name="horas_teo" class="form-control">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label for="" class="form-label">Creditos</label>
                            <input type="text" id="creditos" name="creditos" class="form-control">
                        </div>
                    </div>
                </form>
                <div class="row mt-2">
                    <div class="col-md-12 text-end">
                        <button id="EditarModal" class="btn btn-primary">Editar</button>
                    </div>
                </div>
         `;
    modal.handleUpdate();
}

$(document).ready(() => {
    limpiar();
})
