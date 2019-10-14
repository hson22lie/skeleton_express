import Menu from '../models/Menu'

class MenuController {
    constructor() {}
    create(req) {
        const menu = new Menu(req.name, req.status)
        return menu
    }
    get(status) {
        if (status == null) {

        }
    }
    detail(id) {

    }
}

export default MenuController