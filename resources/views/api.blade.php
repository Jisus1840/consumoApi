@extends('layouts.base_html')

{{-- Titulo --}}
@section('title')
    Consumo de Api
@endsection

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
                <div class="col-md-12" style="overflow-y:auto; max-height: 85vh;">
                    <table id="info" class="table table-striped table-bordered table-hover w-75 text-center">
                        <thead>
                            <tr>
                                <th>Plan</th>
                                <th>Grado</th>
                                <th>Clave</th>
                                <th>Materia</th>
                                <th>Horas Prac.</th>
                                <th>Horas Teo.</th>
                                <th>Creditos</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="{{ asset('js/apiConsumer.js') }}"></script>
@endpush
