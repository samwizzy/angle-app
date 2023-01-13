import {
  animate,
  state,
  style,
  transition,
  trigger,
  stagger,
  query,
  keyframes,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0, transform: 'translateX(-100vw)' })),
  transition(':enter, :leave', [animate('1s ease-in')]),
]);

export const fadeItem = trigger("fadeItem", [
  state("void", style({ opacity: 0, transform: "scale(0)" })),
  transition(':enter', [
    animate("0.5s ease-in", keyframes([
      style({opacity: 0.5, transform: "scale(0.5) translateY(-75px)"}),
      style({opacity: 0.8, transform: "scale(0.8) translateY(35px)"}),
      style({opacity: 1, transform: "scale(1) translateY(0)"}),
    ]))
  ]),
  transition(':leave', [
    animate("0.5s ease-in", keyframes([
      style({opacity: 1, transform: "scale(0.8) translateY(75px)"}),
      style({opacity: 0.8, transform: "scale(0.5) translateY(25px)"}),
      style({opacity: 0, transform: "scale(0) translateY(0)"}),
    ]))
  ])
])

export const swipeIn = trigger('swipeIn', [
  state('void', style({ opacity: 0, transform: 'translateY(100vw)' })),
  transition('void => *', [animate('2s ease-in')]),
]);

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':leave', [
      stagger(100, [
        animate('1s ease-in', style({ opacity: 0 }))
      ])
    ]),
    query(':enter', [
      style({ opacity: 0 }),
      stagger(100, [
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]),
]);
