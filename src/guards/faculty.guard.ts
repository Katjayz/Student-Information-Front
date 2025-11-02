import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from "@angular/router";
import { RoleService } from "../role.service";

@Injectable({
    providedIn: 'root'
})

export class FacultyGuard implements CanActivate {


    constructor(private roleService: RoleService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
 
        if (this.roleService.getRole() == "FACULTY") {
            return true;
        } else {
            this.router.navigate(['/student-login']);
            return false;
        }
    }
}