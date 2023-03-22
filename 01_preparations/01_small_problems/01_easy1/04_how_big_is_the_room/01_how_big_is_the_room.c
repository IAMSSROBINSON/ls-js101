#include <stdio.h>
#define SQUAREFEET 10.7639


int main (int argc, char *argv[]) {

	float length, width, squareMeters;

	printf("\nThis program will print the area of the room in both square meters and square feet.\n\n");

	printf("Please enter numerical length of room (meters): \n");
	scanf("%f", &length);

	printf("\nPlease enter numerical width of room (meters): \n");
	scanf("%f", &width);

	squareMeters = length * width;

	printf("\nThe area of the room is %.2f square meters (%.2f square feet).\n\n", squareMeters, (squareMeters * SQUAREFEET));


	return 0;
}
