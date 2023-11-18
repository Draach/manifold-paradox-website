import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/landing/landing.component'),
    },
    {
        path: 'info',
        loadComponent: () => import('./pages/info/info.component'),
    },
    {
        path: 'discord',
        loadComponent: () => import('./pages/discord/discord.component'),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component'),
    }
];