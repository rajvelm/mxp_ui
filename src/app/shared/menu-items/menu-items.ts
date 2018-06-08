import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'Dashboard',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'onboarding',
    name: 'User Onboarding',
    type: 'link',
    icon: 'basic-paperplane'
  },
  {
    state: 'feesupload',
    name: 'Fees Upload',
    type: 'link',
    icon: 'basic-upload'
  },
  {
    state: 'waiverupload',
    name: 'Waiver Upload',
    type: 'link',
    icon: 'basic-server-upload'
  },
 {
    state: 'inventory',
    name: 'Inventory',
    type: 'link',
    icon: 'basic-server2'
  },
  {
    state: 'declaration',
    name: 'Declaration',
    type: 'link',
    icon: 'basic-sheet-multiple'
  },
  {
    state: 'chargebacks',
    name: 'ChargeBacks',
    type: 'link',
    icon: 'basic-trashcan'
  },
  {
    state: 'approvals',
    name: 'Approvals',
    type: 'link',
    icon: 'basic-todo-pen'
  },
  {
    state: 'reports',
    name: 'Reports',
    type: 'link',
    icon: 'basic-sheet-txt'
  },
  {
    state: 'documents',
    name: 'Documents',
    type: 'link',
    icon: 'basic-notebook'
  }
 /* {
    state: 'client',
    name: 'Client',
    type: 'link',
    icon: 'basic-server2'
  }*/
  
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
