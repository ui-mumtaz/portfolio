import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Toast as ToastService } from '../../core/services/toast';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'toast',
    role: 'status',
    'aria-live': 'polite',
    '[class.is-visible]': 'toast.visible()',
  },
})
export class Toast {
  protected readonly toast = inject(ToastService);
}
