import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {


  @ViewChild('txtProgress') txtProgress: ElementRef 

  //recibe un parametro desde el coponente padre
  //se puede renombrar poniendle enre parentesis el nomnre
  // y con ese nombre se tendra que accesar desde afuera
 @Input('nombre') leyenda: string = 'Leyenda';
 @Input() progreso: number = 50;

 //emite un evento, SIEMPRE es event emitter
 //se representa en el html com evento osea (nombredeloutput) = ...
 // y el resultado de lo que se esta emitiendo viene en $event
 @Output() cambioValor: EventEmitter<number> = new  EventEmitter<number>();

  constructor() { 
    
    // console.log("progreso", this.progreso );
    
    

  }

  ngOnInit() {
   
  }

  onChange( newValue:number ){

    //let elementHtml:any = document.getElementsByName("progreso")[0];
    //console.log( elementHtml.value );
    


    if( newValue >= 100){
      this.progreso = 100;
    }else if( newValue <= 0){
      this.progreso = 0
    }else{
      this.progreso = newValue;
    }

    //elementHtml.value = Number(this.progreso);

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso )
    
  }

  cambiarValor( valor:number ){
    if( this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return
    }
    if( this.progreso <= 0 && valor < 0 ){
      this.progreso = 0;
      return
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso )

    this.txtProgress.nativeElement.focus();
  }

}
