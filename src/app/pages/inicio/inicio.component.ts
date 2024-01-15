import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
    constructor() {
        setInterval(() => {
            this.createDateDisplay()
        }, 500)
    }

    currentDateSignal = signal<string>(this.createDateDisplay())

    createDateDisplay() {
        const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
        const months = ['Jan', 'Fev', 'Mar', 'Abr', "Mai", "Jun", "Jul", "Ago", 'Set', 'Out', 'Nov', 'Dez']
        const day = new Date().getDate()
        const month = months[new Date().getMonth()]
        const weekDay = weekDays[new Date().getDay()]
        const year = new Date().getFullYear()
        const hourMinSec = new Date().toLocaleString().split(', ')[1]

        const formattedDateString = `${weekDay} ${day}, ${month} ${year}, ${hourMinSec}`
        this.currentDateSignal?.set(formattedDateString)
        return formattedDateString
    }
}
