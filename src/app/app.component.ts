import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '# Lazy Loading component';

  constructor(private viewContainer:ViewContainerRef, private cfr:ComponentFactoryResolver) {}

  async loadAdmin() {
    this.viewContainer.clear();
    const {AdminComponent} = await import('./admin/admin.component')
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(AdminComponent)
    )
  }
  async loadUser() {
    this.viewContainer.clear();
    const {UserComponent} = await import('./user/user.component')
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(UserComponent)
    )
  }
}
