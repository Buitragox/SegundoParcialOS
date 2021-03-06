#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

struct arg_struct {
    int arg1;
    int arg2;
};

void *print_the_arguments(void *arguments)
{
    struct arg_struct args = *((struct arg_struct *)arguments);
    //sleep(5);
    printf("%d\n", args.arg1);
    printf("%d\n", args.arg2);
    pthread_exit(NULL);
    return NULL;
}

int main()
{
    pthread_t some_thread;
    struct arg_struct args;
    args.arg1 = 5;
    args.arg2 = 7;
    
    if (pthread_create(&some_thread, NULL, print_the_arguments, &args) != 0) {
        printf("Uh-oh!\n");
        return -1;
    }
    //sleep(1);
    args.arg1 = 10;
    args.arg2 = 20;

    return pthread_join(some_thread, NULL); /* Wait until thread is finished */
}