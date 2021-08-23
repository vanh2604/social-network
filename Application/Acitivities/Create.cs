using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Acitivities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Activities Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;

            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public async Task<Unit> Handle(Command request, CancellationToken token)
            {
                _dataContext.Activities.Add(request.Activity);
                await _dataContext.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}