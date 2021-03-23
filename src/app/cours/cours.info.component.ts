import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Cours } from "./cours";
import { CoursService } from "./cours.service";


@Component({
    templateUrl: './cours.info.component.html'
})
export class  CoursInfoComponent implements OnInit{
     cours!: Cours;

     constructor(private activatedRoute: ActivatedRoute, private courseService: CoursService){};

     ngOnInit(): void {
         this.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
        //this.cours = this.courseService.retrieveById( Number(this.activatedRoute.snapshot.paramMap.get('id')));
        //console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    }

    retrieveById(id: number): void{
        this.courseService.retrieveById(id
            // Number(this.activatedRoute.snapshot.paramMap.get('id'))
             ).subscribe({
            next: cours => this.cours = cours,
            error: error => console.log("error:", error)
        }) ;
    }

    save(): void {
        console.log("save methdod");
        this.courseService.save(this.cours).subscribe({
            next: cours => console.log('Saved with success', cours),
            error: error => console.log("Error: ", error)
        });
    }
    
}