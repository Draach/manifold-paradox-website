import { trigger, group, query, transition, style, animate } from "@angular/animations";

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
    transition('* <=> *', [
        query(':enter, :leave',
            style({
                // TODO: Achieve smooth transitions without displacing the ui.
                position: 'absolute', height: '84.75vh', width: '100vw'
            }), { optional: true }
        ),
        group([
            query(':enter', [
                style({ opacity: 0 }),
                animate('300ms', style({ opacity: 1 })),

            ], { optional: true },),
            query(':leave', [
                style({ opacity: 1 }),
                animate('300ms', style({ opacity: 0 })),
            ], { optional: true },)
        ])
    ])
]);