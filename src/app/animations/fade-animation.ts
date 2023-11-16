import { trigger, group, query, transition, style, animate } from "@angular/animations";

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
    transition('* <=> *', [
        query(':enter, :leave',
            style({
                position: 'absolute', width: '100%',
            }), { optional: true }
        ),
        group([
            query(':enter', [
                style({ opacity: 0 }),
                animate('500ms', style({ opacity: 1 })),

            ], { optional: true },),
            query(':leave', [
                style({ opacity: 1 }),
                animate('500ms', style({ opacity: 0 })),
            ], { optional: true },)
        ])
    ])
]);