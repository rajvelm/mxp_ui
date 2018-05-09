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
    name: 'Onboarding',
    type: 'link',
    icon: 'basic-paperplane'
  },
  {
    state: 'inventory',
    name: 'Inventory',
    type: 'link',
    icon: 'basic-server2'
  },
  {
    state: 'client',
    name: 'Client',
    type: 'link',
    icon: 'basic-server2'
  }
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
