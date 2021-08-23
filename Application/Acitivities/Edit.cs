using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Acitivities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activities activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _autoMapper; 

            public Handler(DataContext context,IMapper autoMapper)
            {
                _context = context;
                _autoMapper = autoMapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.activity.Id);
                _autoMapper.Map(request.activity, activity);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}