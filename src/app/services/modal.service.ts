import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}
  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }
  ungregister(id: string) {
    this.modals = this.modals.filter((element) => element.id !== id);
  }
  isModalOpen(id: string): boolean {
    // return Boolean(this.modals.find((element) => element.id === id)?.visible);
    return !!this.modals.find((element) => element.id === id)?.visible; //Optional chaining? //this.visible;
  }

  toggleModal(id: string) {
    // this.visible = !this.visible;
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
