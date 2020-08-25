"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectEditComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ProjectEditComponent = /** @class */ (function () {
    function ProjectEditComponent(route, projectService) {
        this.route = route;
        this.projectService = projectService;
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.project = this.projectService.getProject(this.id);
        this.editForm();
    };
    ProjectEditComponent.prototype.editForm = function () {
        this.projectEditForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.project.name),
            description: new forms_1.FormControl(this.project.description),
            deadline: new forms_1.FormControl(this.project.deadline),
            picture: new forms_1.FormControl(this.project.picture)
        });
    };
    ProjectEditComponent.prototype.onSubmit = function (form) {
        this.projectService.updateProject(form.value, this.id);
    };
    ProjectEditComponent = __decorate([
        core_1.Component({
            selector: 'app-project-edit',
            templateUrl: './project-edit.component.html',
            styleUrls: ['./project-edit.component.css']
        })
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());
exports.ProjectEditComponent = ProjectEditComponent;
