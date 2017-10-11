import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('closed', style({ transform: 'translateX(0)' })),
      state('open', style({ transform: 'translateX(-100%)' })),
      transition('* => *', animate(300))
    ]),
    trigger('bg', [
      state('closed', style({ display: 'none' })),
      state('open', style({ display: 'block' }))
    ])
  ]
})
export class SlidePanelComponent implements OnInit {

  private currentActivePane: PanelState;
  @Output() activePaneChange: EventEmitter<PanelState> = new EventEmitter<PanelState>();

  constructor() {

  }

  ngOnInit() {
  }

  @Input() set activePane(panelState: PanelState) {
    this.currentActivePane = panelState;
    this.activePaneChange.emit(panelState);
  }

  get activePane(): PanelState {
      return this.currentActivePane;
  }
  

}

type PanelState = 'open' | 'closed';
