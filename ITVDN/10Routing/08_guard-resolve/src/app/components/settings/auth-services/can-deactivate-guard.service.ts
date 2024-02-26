import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

// Интерфейс необходимый для указания с работой компонента.
export interface CanComponentDeactivate {
    // если метод вернет true перенаправление возможно, false - нет.
    canDeactivateComponent: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate) {
        // проверка наличия метода и вызов его, в случае отсутствия метода позволяем уйти с маршрута.
        return component.canDeactivateComponent ? component.canDeactivateComponent() : true;
    }
}
