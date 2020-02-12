const { Observable } = require('rxjs');

const myObservable = Observable.create((observer) => {
    setTimeout(() => {
        observer.next("First Data");
    }, 2000)

    setTimeout(() => {
        observer.next("Second Data");
    }, 2000 * 2)

    setTimeout(() => {
        observer.error("Error get Data");
    }, 5000)

    setTimeout(() => {
        observer.next("Second Data");
    }, 2000 * 3)

    setTimeout(() => {
        observer.complete();
    }, 3500)

})

myObservable.subscribe(
    (data) => {
        console.log(data);
    },
    (err) => {
        console.log(err);
    },
    () => {
        console.log("completed");
    }
)


