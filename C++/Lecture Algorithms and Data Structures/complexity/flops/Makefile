
CXX = g++

CXXFLAGS = -pipe -pthread -march=native -fstack-check -Wall -Wextra -std=gnu++11 -O3
#CXXFLAGS = -pipe -pthread -march=native -fstack-check -Wall -Wextra -std=gnu++11 -ggdb -Werror
# Achtung: Evtl. weden CXXFLAGS in Makefile.Others verändert; z.B. unused parameters 

CC=gcc 
CFLAGS = -ggdb -pedantic -pedantic-errors -Wall -Wcast-align -Wcast-qual -Wconversion -Winline \
         -Wmissing-prototypes -Wmissing-declarations -Wnested-externs -Wno-import -Wpointer-arith \
         -Wshadow -Wstrict-prototypes -Wtraditional -Wwrite-strings -Werror
INCLUDES = 
LIBS = 
OBJDIR = OBJ_Linux
VPATH = $(OBJDIR) 

RM = /bin/rm -f

SRC_CPP     := $(shell ls *.cpp            2>/dev/null; return 0)
SRC_C       := $(shell ls *.c              2>/dev/null; return 0)
TARGETS_CPP := $(shell grep -wl main *.cpp 2>/dev/null; return 0)
TARGETS_CPP := $(TARGETS_CPP:.cpp=)
TARGETS_C   := $(shell grep -wl main *.c   2>/dev/null; return 0)
TARGETS_C   := $(TARGETS_C:.c=)
OBJECTS_CPP := $(addprefix $(OBJDIR)/, $(SRC_CPP:.cpp=.o) )
OBJECTS_C   := $(addprefix $(OBJDIR)/, $(SRC_C:.c=.o) )   
DEP_CPP     := $(addprefix $(OBJDIR)/, $(SRC_CPP:.cpp=.d) )
DEP_C       := $(addprefix $(OBJDIR)/, $(SRC_C:.c=.d) )

# Things to be done in Makefile.Others:
# 1: add additional dependencies from other directories; in the included makefile a variable 
#    LINKOBJECTSOTHERS needs to be defined with relative paths to .o files required for linking.
#    If these .o files are not present, they need to be generated first by calling make in the 
#    directory where the srcs are located.
# 2: redefine TARGETS_CPP or TARGETS_C in case there are *.cpp or *.c files containing the word
#    main but not the main() function
# 3: redefine CXXFLAGS 
include Makefile.Others

.Phony: all
all: $(TARGETS_CPP) $(TARGETS_C)


$(TARGETS_CPP) : $(DEP_CPP) $(DEP_C) $(OBJECTS_CPP) $(OBJECTS_C) $(LINKOBJECTSOTHERS) $(SRC_CPP) $(SRC_C) 
	$(CXX) -o $@ $(OBJECTS_CPP) $(OBJECTS_C) $(LINKOBJECTSOTHERS) $(LIBS)

$(TARGETS_C) : $(DEP_CPP) $(DEP_C) $(OBJECTS_CPP) $(OBJECTS_C) $(LINKOBJECTSOTHERS) $(SRC_CPP) $(SRC_C) 
	$(CC) -o $@ $(OBJECTS_CPP) $(OBJECTS_C) $(LINKOBJECTSOTHERS) $(LIBS)

-include $(DEP_CPP) $(DEP_C)

$(OBJDIR) : 
	mkdir $(OBJDIR)

$(OBJDIR)/%.d : %.cpp | $(OBJDIR) 
	$(CXX) -MM $(CXXFLAGS) $(INCLUDES) -MF $@ $<
	@# add target .d and correct directory
	sed -i -e '1,1s,\($*\)\.o[ :]*,$(OBJDIR)\/\1.o $@ : ,g' $@
$(OBJDIR)/%.d : %.c | $(OBJDIR) 
	$(CC) -MM $(CFLAGS) $(INCLUDES) -MF $@ $<
	@# add target .d and correct directory
	sed -i -e '1,1s,\($*\)\.o[ :]*,$(OBJDIR)\/\1.o $@ : ,g' $@
$(OBJDIR)/%.o : %.cpp %.d | $(OBJDIR) 
	$(CXX) -c $(CXXFLAGS) $(INCLUDES) -o $@ $<
$(OBJDIR)/%.o : %.c %.d | $(OBJDIR) 
	$(CC) -c $(CFLAGS) $(INCLUDES) -o $@ $<

.Phony: clean
clean:
	$(RM) $(TARGETS_CPP) $(TARGETS_C) $(OBJECTS_CPP) $(OBJECTS_C) $(DEP_CPP) $(DEP_C)
	rmdir $(OBJDIR)
