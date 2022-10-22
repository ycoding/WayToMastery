import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
// import { ModalService } from '../services/modal.service';
@NgModule({
  declarations: [ModalComponent, TabComponent, TabsContainerComponent],
  imports: [CommonModule],
  exports: [ModalComponent, TabsContainerComponent, TabComponent],
  // providers: [ModalService],
})
export class SharedModule {}
