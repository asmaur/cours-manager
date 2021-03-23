
import { Component, OnInit } from "@angular/core"
import { Cours } from "./cours"
import { CoursService } from "./cours.service";

@Component({
    //selector: 'app-cours-list',
    templateUrl: './cours.list.component.html'
})
export class CoursListComponent implements OnInit{
    _courses: Cours[] = [];
    filteredCours: Cours[] = [];
    _filterBy: string = '';

    constructor(private coursService: CoursService){
        
    }

    ngOnInit(): void {

        this.retrieveAll();
       
         //   /*this._courses = this.coursService.retrieveAll();
        //   this.filteredCours = this._courses; */
    }

    retrieveAll(): void {
        this.coursService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCours = this._courses;
            },
            error: err => console.log("Error: ",err)
        });
    }

    deleteById(id: number): void{
        this.coursService.deleteById(id).subscribe({
            next: () => {
                console.log('Delete cours id');
                this.retrieveAll();
            },
            error: err => console.log("Something went wrong...")
        });
    }

    set filter(value: string){
        //console.log(value);
        this._filterBy = value;
        this.filteredCours = this._courses.filter((cours: Cours) => cours.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

    
}