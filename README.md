# Notes


## Module

    ng g module icons
    ng g module orders --routing

---
## Component

    ng g c page-add-client
    ng g c icon-close --export

---
## SCSS

    @import "./stylings/fonts"  
\_fonts.scss <- fichier partiel

---
## Transclusion

    <ng-content select="selector">

---
## Directives

    [ngClass]="{ 'ma-classe':maVariable }"


### Structurelle

* \*ngIf="maCondition; else autreTemplate

        <span *ngIf="maCondition; else autreTemplate"> text 1 </span>
        <ng-template #autreTemplate>
            <span> text 2 </span>
        </ng-template>

* \*ngIf="maCondition; then firstBlock else otherBlock"

        <ng-container *ngIf="maCondition; then firstBlock else otherBlock"></ng-container>
        <ng-template #firstBlock>
            <span> text 1 </span>
        </ng-template>
        <ng-template #autreTemplate>
            <span> text 2 </span>
        </ng-template>

* \*ngSwitchCase=""

        <span *ngSwitchCase=""></span>

---
## Binding

    <span (click)="maMethode()"> button </span>
