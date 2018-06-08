import { InventoryModel } from './client.inventory.model';
export class ClientConfigModel {

    constructor(public configId : number,public configName : string,public inventoryFiled : InventoryModel[]) {
    }

}
