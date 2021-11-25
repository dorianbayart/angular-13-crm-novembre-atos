# Notes

## Module

`ng g module icons`  
`ng g module orders --routing`

---

## Component

`ng g c page-add-client`  
`ng g c icon-close --export`

---

## Enum - Interface - Model

`ng g enum state-order`  
`ng g interface order-i`  
`ng g class order`

---

## Service

`ng g service orders`

---

## Pipe

`ng g pipe total --export`

---

## SCSS

    @import "./stylings/fonts"

`_fonts.scss` est un fichier partiel

---

## Transclusion

    <ng-content select="selector">

---

## Directives

    [ngClass]="{ 'ma-classe':maVariable }"

### Structurelle

- if

        <span *ngIf="maCondition; else autreTemplate"> text 1 </span>
        <ng-template #autreTemplate>
            <span> text 2 </span>
        </ng-template>

- if then else

        <ng-container *ngIf="maCondition; then firstBlock else otherBlock"></ng-container>
        <ng-template #firstBlock>
            <span> text 1 </span>
        </ng-template>
        <ng-template #autreTemplate>
            <span> text 2 </span>
        </ng-template>

- switchCase

        <ng-container [ngSwitchCase]="expression">
            <ng-content *ngSwitchCase="match_1"> text 1 </ng-content>
            <ng-content *ngSwitchCase="match_2"> text 2 </ng-content>
        </ng-container>

---

## Event Binding

    <span (click)="maMethode()"> button </span>

---

## Routing

- Dans le module racine: `.forRoot()`
- Dans tous les autres modules: `.forChild()`

Exemple (racine):

    const routes: Routes = [
      { path: 'first-component', component: FirstComponent },
      { path: 'second-component', component: SecondComponent },
      { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
      { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
    ];

### Lazy loading

    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }

### Preloading

    .forRoot(routes, { preloadingStrategy: PreloadAllModules })

### RouterLink - RouterLinkActive

    <a routerLink="orders" routerLinkActive="active" class="nav-link">Orders</a>

---

## Observable

    .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
    });

    .unsubscribe();

---
## Subject

    sub = new Subject<string>();
    this.sub.subscribe(data => console.log('Subj 1: ', data));
    this.sub.subscribe(data => console.log('Subj 2: ', data));
    this.sub.next('notif');

---
## BehaviorSubject

    bSub = new BehaviorSubject(123);
    this.bSub.subscribe((data) => console.log('BehaviorSubj 1: ', data));
    this.bSub.subscribe((data) => console.log('BehaviorSubj 2: ', data));
    this.bSub.next(456);

---
## Decorators

    @Input('propertyName') title: string;

---
## Lifecycle hooks

    ngOnInit()
    ngOnChanges()
    ngDoCheck()
    ngOnDestroy()

---
## Pipes

    <select>  
        <option *ngFor="let state of stateOrder | keyvalue">{{ state.value }}</option>  
    </select>


