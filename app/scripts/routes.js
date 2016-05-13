/**
 * @ngdoc overview
 * @name numetal.routes
 * @description
 * # numetal.routes
 *
 * Routes module. All app states are defined here.
 */

angular.module('numetal')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider)
    {
        'use strict';

        $locationProvider.hashPrefix('!');
        // $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('metal', {
                url: '',
                template: '<layout></layout>',
                abstract: true,
                controller: function (Facts) {
                    var vm = this;
                    vm.a = Facts.api;
                    vm.d = Facts.data;
                    vm.s = Facts.state;
                    vm.u = Facts.ux;
                },
                controllerAs: 'metal'
            })
            .state('metal.home', {
                url: '/',
                template: '<posts></posts>'
            })
            .state('metal.about', {
                url: '/about',
                template: '<content-single type="about"></content-single>'
            })
            .state('metal.services', {
                url: '/services',
                template: '<content type="services"></content>'
            })
            .state('metal.services.services', {
                url: '/:services',
                template: '<content-single type="services"></content-single>'
            })
            .state('metal.clients', {
                url: '/clients',
                template: '<content type="clients"></content>'
            })
            .state('metal.clients.clients', {
                url: '/:clients',
                template: '<content-single type="clients"></content-single>'
            })
            .state('metal.posts', {
                url: '/posts',
                template: '<content type="posts"></content>'
            })
            .state('metal.posts.posts', {
                url: '/:posts',
                template: '<content-single type="posts"></content-single>'
            })
            .state('admin', {
                url: '/admin',
                template: '<ui-view></ui-view>',
                controller: function (Facts) {
                    var vm = this;
                    vm.a = Facts.api;
                    vm.d = Facts.data;
                    vm.s = Facts.state;
                    vm.u = Facts.ux;
                },
                controllerAs: 'admin'
            })
            .state('admin.about', {
                url: '/about',
                template: '<admin type="about"></admin>'
            })
            .state('admin.services', {
                url: '/services',
                template: '<admin type="services"></admin>'
            })
            .state('admin.clients', {
                url: '/clients',
                template: '<admin type="clients"></admin>'
            })
            .state('admin.posts', {
                url: '/posts',
                template: '<admin type="posts"></admin>'
            })
            .state('admin.media', {
                url: '/media',
                template: '<uploader></uploader><admin type="media"></admin>'
            })
            /* STATES-NEEDLE - DO NOT REMOVE THIS */;

    });