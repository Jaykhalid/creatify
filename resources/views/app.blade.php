<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Creatify</title>
</head>
<body>
    <div id="app">
        @{{ msg }}
        <router-view></router-view>
    </div>
    <script src="{{ url('js/app.js') }}"></script>
</body>
</html>