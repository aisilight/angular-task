angular.module("myApp", [])
.controller("firstCtrl", function($scope){


  //Создать временную переменную
  $scope.tempInput = "тестовое задание";  //покажет надпись в поле ввода

  //Создать хранилище для всех заданий
  $scope.tasksArray = ["задание 1", "задание 2"];
  //Создать функцию, которая приносит из временного хранилища в общий задания
  $scope.addNew = function() {
  if($scope.tempInput){
     $scope.tasksArray.push($scope.tempInput);  //добавляем в последний элемент массива временную переменную tempInput
     $scope.tempInput = "";  //освобождаем временную переменную
   } else {
        console.log('В поле input пусто');
    }
}
//создаем функцию для удаления заданий
$scope.deleteItem = function(item){
    var index = $scope.tasksArray.indexOf(item);  //ищем в массиве item для удаления
    console.log(index);
    $scope.tasksArray.splice(index, 1);  //удаляем найденное задание
};

});
