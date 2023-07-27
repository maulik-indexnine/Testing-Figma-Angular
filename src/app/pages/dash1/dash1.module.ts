import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Dash1 } from './dash1.component'

const routes = [
  {
    path: '',
    component: Dash1,
  },
]

@NgModule({
  declarations: [Dash1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Dash1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Dash1Module {}
