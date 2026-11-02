export interface ILibrary{
    libraryId: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
    difficulty: string;
    sets: number;
    reps: number; 
}