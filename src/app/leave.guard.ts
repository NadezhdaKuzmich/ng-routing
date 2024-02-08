import { CanDeactivateFn } from '@angular/router';
import { AudiComponent } from './components/audi/audi.component';

export const leaveGuard: CanDeactivateFn<AudiComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.form.invalid && component.form.dirty) {
    return window.confirm('Unsaved data detected. Want to exit?');
  } else {
    return true;
  }
};
