@extends('layouts.base_html')

{{-- Titulo --}}
@section('title')
    Formulario
@endsection

{{-- Section --}}
@section('content')
    <div class="container-fluid mt-5" style="min-height: 95vh">
        <div class="card carta" style="width: 85%; margin-left: 7%; opacity: .9; min-height: 65vh">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Consumo de Api</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="{{ route('formulario') }}">Agregar
                                    registro</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="{{ route('api') }}">Registros</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            Api
                        </span>
                    </div>
                </div>
            </nav>
            <div class="row mt-2">
                <form action="" id="agregarDatos">
                    @csrf
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
                <div class="row mt-4 text-center">
                    <div class="col-md-12">
                        <button type="button" onclick="agregar()" id="guardar" class="btn btn-success">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="{{ asset('js/apiConsumer.js') }}"></script>
@endpush
