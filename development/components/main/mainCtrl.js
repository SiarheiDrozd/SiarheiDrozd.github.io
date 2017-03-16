export default function MainController($location, MainService) {
    this.location = $location;
    this.mainService = MainService;
}
MainController.prototype.isActive = function ( path ) {
    return this.mainService.getClass(this.location, path)
};
