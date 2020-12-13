@extends('layout.main')

@section('title', 'Tambah Data Covid')
@section('title-nav', 'Kelola Data Covid')

@section('content')
<div class="data-list">
    <div class="container pt-2 py-4">
        
        {{-- bread crumb --}}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ url('admin/data') }}">Kelola Data Covid</a></li>
                <li class="breadcrumb-item active" aria-current="page">Tambah Data Covid</li>
            </ol>
        </nav>

        <div class="card col">
            <div class="card-header py-3">
                <span class="text-success">Tambah Data</span>
            </div>
            <div class="card-body" style="overflow-x: auto">
                <form action="{{ url('admin/data') }}" method="post">
                    @csrf                    

                    {{-- Tanggal --}}
                    <div class="form-group">
                        <label for="tgl">Tanggal</label>
                        <input type="date" class="form-control @error('tgl') is-invalid @enderror" id="tgl" name="tgl" value="{{ old('tgl') }}" placeholder="Masukan Tanggal...">
                        @error('tgl')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- jam --}}
                    <div class="form-group">
                        <label for="jam">Jam</label>
                        <input type="time" class="form-control @error('jam') is-invalid @enderror" id="jam" name="jam" value="{{ old('jam') }}" placeholder="Masukan Jam...">
                        @error('jam')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- nama wilayah --}}
                    <div class="form-group">
                        <label for="wilayah">Nama Wilayah</label>
                        <select name="wilayah" id="wilayah" class="form-control @error('wilayah') is-invalid @enderror">
                            <option value="">--Pilih--</option>

                            @foreach ($wilayahs as $wilayah)
                                <option value="{{ $wilayah->id_wilayah }}">{{ $wilayah->nama_wilayah }}</option>                                
                            @endforeach
                            
                        </select>
                        @error('wilayah')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- Jumlah Meninggal --}}
                    <div class="form-group">
                        <label for="died">Jumlah Meninggal</label>
                        <input type="number" class="form-control @error('died') is-invalid @enderror" id="died" name="died" value="{{ old('died') }}" placeholder="Masukan jumlah meninggal..." min="0">
                        @error('died')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- Jumlah ODP --}}
                    <div class="form-group">
                        <label for="odp">Jumlah ODP</label>
                        <input type="number" class="form-control @error('odp') is-invalid @enderror" id="odp" name="odp" value="{{ old('odp') }}" placeholder="Masukan jumlah ODP..." min="0">
                        @error('odp')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

            </div>
            <div class="card-footer d-flex justify-content-between justify-content-md-start">
                <a href="{{ url('admin/data') }}" class="btn btn-secondary mr-3">Kembali</a>
                <button type="submit" class="btn btn-primary">Tambah</button>
            </form>
            </div>
        </div>
    </div>
</div>
@endsection