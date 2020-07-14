function bubbleSort(array)
{
    // Make a flag to check whether any elements have been swapped.
    let swapped = false;

    // Repeat everything in this do-while loop until there is an iteration
    // where no elements have been swapped, i.e., everything is in order.
    do
    {
        // Initialise the flag to false - nothing swapped so far for this
        // iteration…
        swapped = false;

        // Run through the whole array swapping any numbers which are not
        // in order.
        for (let i = 1; i < array.length; i++)
        {
             // This loops for every pair of consecutive values in the array.
             // Values are array[i-1] and array[i].

             // TODO: Add missing code:
             //       Check if the value on the left (array[i-1]) is greater
             //       than the value on the right (array[i]). If so, swap
             //       the two array elements and record the swap.
             if (array[i] > array[i-1]){
               let a = array[i];
               array[i] =  array[i-1];
               array[i-1] = a;
               swapped = true
             }
        }
    }while (swapped)
}
