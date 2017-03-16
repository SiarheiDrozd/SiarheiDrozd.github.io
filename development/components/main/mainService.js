export default function MainService() {
    this.getClass = function (location, path){
        return (location.path().substr(0, path.length) === path) ? 'active' : '';
    };
}