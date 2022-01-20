export class Film {
  // constructor(public title: string, public category: string, public content: string, public date: Date,
  //             public time?: string, public status?: boolean) {
  //
  // }

  constructor(public filmId: string,
              public title: string,
              public image?: string,
              public smallImage?: string,
              public releaseDate?: string,
              public runtimeStr?: string,
              public plot?: string,
              public awards?: string,
              public directors?: string,
              public rating?: string
  ) {
  }
}
