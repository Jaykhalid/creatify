@extends('layout.main')

@section('title', 'Ubah Data Wilayah')
@section('title-nav', 'Kelola Wilayah')

@section('content')
<div class="data-list">
    <div class="container pt-2 py-4">
        
        {{-- bread crumb --}}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ url('admin/wilayah') }}">Kelola Wilayah</a></li>
                <li class="breadcrumb-item active" aria-current="page">Ubah Data Wilayah</li>
            </ol>
        </nav>

        <div class="card col">
            <div class="card-header py-3">
                <span class="text-success">Ubah Data</span>
            </div>
            <div class="card-body" style="overflow-x: auto">
                <form action="{{ url("admin/wilayah/{$data->id_wilayah}") }}" method="post">
                    @csrf
                    @method('put')

                    {{-- nama --}}
                    <div class="form-group">
                        <label for="nama">Nama Wilayah</label>
                        <input type="text" class="form-control @error('nama') is-invalid @enderror" id="nama" name="nama" value="{{ $data->nama_wilayah ?? old('nama') }}" placeholder="Masukan nama wilayah...">
                        @error('nama')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- penduduk --}}
                    <div class="form-group">
                        <label for="penduduk">Jumlah Penduduk</label>
                        <input type="number" class="form-control @error('penduduk') is-invalid @enderror" id="penduduk" name="penduduk" value="{{ $data->jumlah_penduduk ?? old('penduduk') }}" placeholder="Masukan jumlah penduduk...">
                        @error('penduduk')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- letak --}}
                    <div class="form-group">
                        <label for="letak">Letak Wilayah</label>
                        <input type="text" class="form-control @error('letak') is-invalid @enderror" id="letak" name="letak" value="{{ $data->letak_wilayah ?? old('letak') }}" placeholder="Masukan letak wilayah...">
                        @error('letak')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- luas --}}
                    <div class="form-group">
                        <label for="luas">Luas Wilayah</label>
                        <input type="text" class="form-control @error('luas') is-invalid @enderror" id="luas" name="luas" value="{{ $data->luas_wilayah ?? ('luas') }}" placeholder="Masukan luas wilayah...">
                        @error('luas')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- data --}}
                    <div class="form-group">
                        <label for="data">Data Wilayah</label>
                        <input type="text" class="form-control @error('data') is-invalid @enderror" id="data" name="data" value="{{ $data->data_wilayah ?? ('data') }}" placeholder="Masukan data wilayah...">
                        @error('data')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- ket --}}
                    <div class="form-group">
                        <label for="ket">Keterangan</label>
                        <input type="text" class="form-control @error('ket') is-invalid @enderror" id="ket" name="ket" value="{{ $data->ket ??('ket') }}" placeholder="Masukan keterangan...">
                        @error('ket')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

            </div>
            <div class="card-footer d-flex justify-content-between justify-content-md-start">
                <a href="{{ url('admin/wilayah') }}" class="btn btn-secondary mr-3">Kembali</a>
                <button type="submit" class="btn btn-primary">Ubah</button>
            </form>
            </div>
        </div>
    </div>
</div>
@endsection