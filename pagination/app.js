/**
 * Created by menghy on 16/5/26.
 */
var app = angular.module( 'app', ['myModule'] );
app.controller( 'myCtrl', function ( $scope, $http )
{
    $scope.onPageChange = function ()
    {
        $http.get( '/api/getdata?pageIndex=' + ( $scope.currentPage - 1 ) + '&pageSize=10' ).success( function ( data )
        {
            $scope.items = data;
        } );
    }
    $http.get( '/api/getpagecount' ).success( function ( data )
    {
        $scope.pageCount = data;
    } );
    $http.get( '/api/getdata?pageIndex=0&pageSize=10' ).success( function ( data )
    {
        $scope.items = data;
    } );
} );